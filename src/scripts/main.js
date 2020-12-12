'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');

burger.addEventListener('click', event => {
  burger.children[0].classList.toggle('burger__button--active');
  burger.children[1].classList.toggle('burger__button--active');
  logo.classList.toggle('logo--active');

  if (!nav.classList.contains('animate__slideInLeft')) {
    nav.classList.remove('animate__slideOutLeft');
    nav.classList.add('nav--toggle', 'animate__slideInLeft');
  } else {
    nav.classList.remove('animate__slideInLeft');
    nav.classList.add('animate__slideOutLeft');
  }
});

const filterButton = document.querySelector('.filters__button');
const filtersCard = document.querySelector('.card');

filterButton.addEventListener('click', function() {
  filterButton.classList.toggle('filters__button--active');
  filtersCard.classList.toggle('card--active');
});

const navList = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__item');
const navLinks = document.querySelectorAll('.nav__link');

navList.addEventListener('click', event => {
  if ((event.target.tagName !== 'BUTTON') && (event.target.tagName !== 'A')) {
    return;
  }

  for (let i = 0; i < navItems.length; i++) {
    if (event.target === navLinks[i]) {
      navItems[i].classList.add('nav__item--active');
      navLinks[i].classList.add('nav__link--active');
    } else {
      navItems[i].classList.remove('nav__item--active');
      navLinks[i].classList.remove('nav__link--active');
    }
  }
});

function makeActive(container, items, activatedClass) {
  return (
    container.addEventListener('click', (event) => {
      if (!event.target.classList.contains(activatedClass)) {
        return;
      }

      items.forEach(item => {
        return item.classList.remove(`${activatedClass}--active`);
      });

      event.target.classList.add(`${activatedClass}--active`);
    })
  );
}

const yearsContainer = document.querySelector('.card__years');
const years = document.querySelectorAll('.card__year');

makeActive(yearsContainer, years, 'card__year');

const buttonsContainer = document.querySelector('.card__buttons');
const buttons = document.querySelectorAll('.card__button');

makeActive(buttonsContainer, buttons, 'card__button');

window.onload = function() {
  // eslint-disable-next-line no-undef
  const chart = new CanvasJS.Chart('chart__wrapper', {
    legend: {
      horizontalAlign: 'left',
      itemWidth: 138,
      markerMargin: 10,
      fontSize: 12,
      fontFamily: 'Roboto, sans-serif',
    },
    axisX: {
      minimum: 0,
      interval: 1,
      tickLength: 4,
      tickColor: '#000',
      lineColor: '#6f6f6f',
      labelFontSize: '12',
      margin: 14,
    },
    axisY: {
      minimum: 0,
      maximum: 1050,
      interval: 250,
      tickLength: 4,
      tickColor: '#000',
      lineColor: '#6f6f6f',
      labelFontSize: '12',
      gridColor: 'transparent',
    },
    data: [
      {
        type: 'line',
        dataPoints: [
          {
            x: 0, y: 70,
          },
          {
            x: 1, y: 270,
          },
          {
            x: 2, y: 250,
          },
          {
            x: 3, y: 280,
          },
          {
            x: 4, y: 150,
          },
          {
            x: 5, y: 110,
          },
          {
            x: 6, y: 90,
          },
          {
            x: 7, y: 80,
          },
          {
            x: 8, y: 250,
          },
          {
            x: 9, y: 300,
          },
          {
            x: 10, y: 400,
          },
          {
            x: 11, y: 700,
          },
        ],
        name: 'Revenue',
        lineColor: '#2f80ed',
        lineThickness: 1,
        markerType: 'none',
        showInLegend: true,
        legendMarkerType: 'square',
        legendMarkerColor: '#2f80ed',
        legendMarkerBorderColor: '#2f80ed',
        legendMarkerBorderThickness: 12,
      },
      {
        type: 'line',
        dataPoints: [
          {
            x: 0, y: 300,
          },
          {
            x: 1, y: 450,
          },
          {
            x: 2, y: 600,
          },
          {
            x: 3, y: 520,
          },
          {
            x: 4, y: 500,
          },
          {
            x: 5, y: 650,
          },
          {
            x: 6, y: 670,
          },
          {
            x: 7, y: 700,
          },
          {
            x: 8, y: 800,
          },
          {
            x: 9, y: 1020,
          },
          {
            x: 10, y: 950,
          },
          {
            x: 11, y: 1050,
          },
        ],
        name: '12MMA',
        lineColor: '#63ecdb',
        lineThickness: 1,
        markerType: 'none',
        showInLegend: true,
        legendMarkerType: 'square',
        legendMarkerColor: '#63ecdb',
        legendMarkerBorderColor: '#63ecdb',
        legendMarkerBorderThickness: 12,
      },
    ],
  });

  chart.render();
};
