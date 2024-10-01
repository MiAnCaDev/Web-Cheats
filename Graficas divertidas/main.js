const svgPie = document.querySelector('.pie-chart');
  new chartXkcd.Pie(svgPie, {
    title: 'Binario',
    data: {
      labels:[ 'ELM 1', 'ELM 10', 'ELM 11', 'ELM 100', 'ELM 101'],
      datasets: [{
        data: [500, 200, 80, 90, 100,],
      }]
    }, 
  })