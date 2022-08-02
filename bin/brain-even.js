#!/usr/bin/env node
import startGreeting from '../src/cli.js';
import startEvenGame from '../src/even.js';

const userName = startGreeting();
startEvenGame(userName);
