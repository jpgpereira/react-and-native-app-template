import React from 'react';
import Container from 'src/components/Container';
import Title from 'src/components/Title';
import Button from 'src/components/Button';

function App() {
  return (
    <Container>
      <Title text="App Template" />
      <Button text="Button Title" onPress={() => {}} />
    </Container>
  );
}

export default App;
