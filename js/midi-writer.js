// midi-writer.js
// Minimal zero-dependency Standard MIDI File (format 0) writer.
// Takes engine.render() events and produces a Buffer with a valid .mid file.

"use strict";

const { PPQ } = require("./engine");

function vlq(value) {
  // variable-length quantity encoding
  const bytes = [value & 0x7f];
  value >>= 7;
  while (value > 0) {
    bytes.unshift((value & 0x7f) | 0x80);
    value >>= 7;
  }
  return bytes;
}

/**
 * @param {Array<{note,velocity,startTick,durationTick}>} events
 * @param {object} [opts]
 * @param {number} [opts.bpm=170]
 * @param {number} [opts.channel=9]  MIDI channel 10 (drums) by default
 * @returns {Buffer}
 */
function eventsToMidi(events, opts) {
  opts = opts || {};
  const bpm = opts.bpm || 170;
  const channel = opts.channel !== undefined ? opts.channel : 9;

  // Expand into absolute-time on/off messages
  const messages = [];
  for (const e of events) {
    messages.push({ tick: e.startTick, type: 0x90, note: e.note, vel: e.velocity });
    messages.push({
      tick: e.startTick + e.durationTick,
      type: 0x80,
      note: e.note,
      vel: 0,
    });
  }
  messages.sort((a, b) => a.tick - b.tick || a.type - b.type);

  const track = [];
  // tempo meta event
  const usPerQuarter = Math.round(60000000 / bpm);
  track.push(0x00, 0xff, 0x51, 0x03,
    (usPerQuarter >> 16) & 0xff, (usPerQuarter >> 8) & 0xff, usPerQuarter & 0xff);

  let lastTick = 0;
  for (const m of messages) {
    track.push(...vlq(m.tick - lastTick));
    lastTick = m.tick;
    track.push(m.type | channel, m.note & 0x7f, m.vel & 0x7f);
  }
  // end of track
  track.push(0x00, 0xff, 0x2f, 0x00);

  const header = Buffer.from([
    0x4d, 0x54, 0x68, 0x64, // MThd
    0, 0, 0, 6,             // header length
    0, 0,                   // format 0
    0, 1,                   // one track
    (PPQ >> 8) & 0xff, PPQ & 0xff,
  ]);

  const trackBuf = Buffer.from(track);
  const trackHeader = Buffer.alloc(8);
  trackHeader.write("MTrk", 0, "ascii");
  trackHeader.writeUInt32BE(trackBuf.length, 4);

  return Buffer.concat([header, trackHeader, trackBuf]);
}

if (typeof module !== "undefined") {
  module.exports = { eventsToMidi, vlq };
}
