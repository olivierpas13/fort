import Link from 'next/link';
import MainSection from './styledPresentation';

const Presentation = () => {
  return (
    <MainSection>
      <div className='main-text'>
        <h3>
            Don&apos;t let errors control your app,
        </h3>
        <h3>
            Control them with Fort
        </h3>
      </div>
      <Link href={'/registration'} >
        <a className='try-button'>
          Try it out for free
        </a>
      </Link>
    </MainSection>
  );
};

export default Presentation;


// import Link from 'next/link';
// import MainSection from './styledPresentation';
// import { MainColorText } from '../../generalStyledComponents/Text';

// const Presentation = () => {
//   return (
//     <MainSection>
//       <div className='main-text'>
//         <h3>
//             Don&apos;t let errors control your app,
//         </h3>
//         <h3>
//             Control them with Fort
//         </h3>
//       </div>
//       <Link href={'/registration'} >
//         <div className='try-button' >
//           <a>
//             Try it out for free
//           </a>
//         </div>
//       </Link>
//     </MainSection>
//   );
// };

// export default Presentation;