function solution(bandage, health, attacks) {
  const [skillTime, heal, bonusHeal] = bandage;
  let currentHealth = health;
  let runtime = attacks[attacks.length - 1][0];
  let skillStart = 0;
  let attackCnt = 0;

  for (let i = 0; i <= runtime; i++) {
    if (currentHealth < 0) {
      return -1;
    }

    let attackTime = attacks[attackCnt][0];
    let attackPoint = attacks[attackCnt][1];
    
    if (i === attackTime) {
      currentHealth -= attackPoint;
      attackCnt++;
      skillStart = 0;
      continue;
    }

    skillStart++;

    if (skillStart === skillTime) {
      currentHealth += bonusHeal;
      skillStart = 0;
    }

    if (currentHealth >= health) {
      currentHealth = health;
    } else {
      currentHealth += heal;
    }
  }

  return currentHealth > 0 ? currentHealth : -1;
}