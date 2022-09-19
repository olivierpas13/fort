import Landing from '../layouts/landing';
import Presentation from '../components/Main/Presentation';

export default function Home() {
  return (
    <Landing>
      <Presentation/>
      <h1>{process.env.PORT}</h1>
    </Landing>
  );
}
