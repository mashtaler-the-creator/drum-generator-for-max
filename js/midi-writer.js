// midi-writer.js
// Minimal zero-dependency Standard MIDI File (format 0) writer.
// Takes engine.render() events and produces a Uint8Array with a valid .mid
// file. Uint8Array (not Buffer) so the same code runs in Node (fs and
// http.res both accept it) and in the browser (Blob download).

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
 * @returns {Uint8Array}
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

  const header = [
    0x4d, 0x54, 0x68, 0x64, // MThd
    0, 0, 0, 6,             // header length
    0, 0,                   // format 0
    0, 1,                   // one track
    (PPQ >> 8) & 0xff, PPQ & 0xff,
    0x4d, 0x54, 0x72, 0x6b, // MTrk
    (track.length >> 24) & 0xff, (track.length >> 16) & 0xff,
    (track.length >> 8) & 0xff, track.length & 0xff,
  ];

  const out = new Uint8Array(header.length + track.length);
  out.set(header, 0);
  out.set(track, header.length);
  return out;
}

if (typeof module !== "undefined") {
  module.exports = { eventsToMidi, vlq };
}
