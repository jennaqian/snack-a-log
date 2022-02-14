const confirmHealth = (snack) => {
  const { fiber, protein, added_sugar } = snack;

  if (added_sugar > 5) return false;
  if (protein >= 5) return true;
  if (fiber >= 5) return true;
  if (protein < 5 && fiber < 5) return false;

  return null;
};
module.exports = confirmHealth;
