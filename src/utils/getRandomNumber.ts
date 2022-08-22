interface getRandomNumberProps {
  min: number;
  max: number;
}

export default function getRandomNumber({ min, max }: getRandomNumberProps = { min: 1, max: 20 }) {
  // between 1 and 20
  return Math.floor(Math.random() * max) + min;
}
