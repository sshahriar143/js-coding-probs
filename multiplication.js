function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood =4;
    const perTableWood =10;
    const perBedWood =46;
    
    const totalChairWood = perChairWood*chairQuantity;
    const totalTableWood = perTableWood*tableQuantity;
    const totalBedWood = perBedWood*bedQuantity;
    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood;
}

const totalWood = woodCalculator(0 , 1, 0);
console.log(totalWood);