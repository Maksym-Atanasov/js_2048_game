'use strict';

// Uncomment the next lines to use your game instance in the browser
const Game = require('../modules/Game.class');
const game = new Game();

const startButton = document.querySelector('.button.start');
const startMessage = document.querySelector('.message-start');
const gameScore = document.querySelector('.game-score');
const messageWin = document.querySelector('.message-win');
const messageLose = document.querySelector('.message-lose');

startButton.addEventListener('click', () => {
  if (startButton.textContent === 'Start') {
    game.start();
    startButton.textContent = 'Restart';
    startButton.classList.replace('start', 'restart');
    startMessage.classList.add('hidden');
  } else if (startButton.textContent === 'Restart') {
    startButton.textContent = 'Start';
    startButton.classList.replace('restart', 'start');
    startMessage.classList.remove('hidden');
    messageWin.classList.add('hidden');
    messageLose.classList.add('hidden');

    game.restart();
    game.renderField();

    gameScore.textContent = game.getScore();
  }
});

document.addEventListener('keydown', (e) => {
  if (game.getStatus() === 'playing') {
    if (e.key === 'ArrowUp') {
      game.moveUp();
    }

    if (e.key === 'ArrowDown') {
      game.moveDown();
    }

    if (e.key === 'ArrowLeft') {
      game.moveLeft();
    }

    if (e.key === 'ArrowRight') {
      game.moveRight();
    }
  }

  if (game.getStatus() === Game.GameStatus.lose) {
    messageLose.classList.remove('hidden');
  }

  if (game.getStatus() === Game.GameStatus.win) {
    messageWin.classList.remove('hidden');
  }

  game.renderField();

  gameScore.textContent = game.getScore();
});
