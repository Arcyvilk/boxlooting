import { Button, Wrapper } from 'components';
import { Box, boxes } from 'data/boxes';

export const Home = () => {
  return (
    <Wrapper>
      <h1>Choose a lootbox</h1>
      {boxes.map((box: Box) => (
        <Button onClick={() => window.open(`/${box.id}`, '_self')}>
          {box.name.toUpperCase()}
        </Button>
      ))}
    </Wrapper>
  );
};
