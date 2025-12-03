import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'MUHAMED',
        5000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend Developer',
        5000,
        
       
      ]}
      wrapper="span"
      speed={300}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default ExampleComponent;