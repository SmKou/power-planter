import './css/fonts.css';
import './css/styles.css';

// Refer variables from .env => ${process.env.varName}

const garden = document.querySelector('.garden');
const plots = Array(25).fill(0);

for (let i = 0; i < plots.length; i++) {
    const plot_div = document.createElement('div');
    plot_div.id = `plot-${i}`;
    garden.append(plot_div);
}

const plants = [bud, seed, bloom, flower]
for (let i = 0; i < plants.length; i++) {
    const plant = document.createElement('div');
    plant.classList.add('plant');
    plant.classList.add(plants[i]);
    document.getElementById(`plot-${i}`).append(plant);
}
