import { styles } from "../styles";
import Dictaphone from './Dictaphone'
import VideoCapture from './VideoCapture'
import { Unity,useUnityContext } from 'react-unity-webgl'
const SecondPage = () => {
  const {unityProvider,isLoaded,loadingProgression}=useUnityContext({
    codeUrl:'data/build.wasm',
    frameworkUrl:'data/build.framework.js',
    dataUrl:'data/webgl.data',
    loaderUrl:'data/Ne.loader.js'
  })


  return (
    <section id="secondpage" className={` relative z-0 bg-primary  `}>

   <div className="unity-container unitypadding ">
   <Unity
  unityProvider={unityProvider}
/>
</div>


       <div>
         <Dictaphone/> 
        {/* <VideoCapture/>  */}
        </div>
    </section>
  );
};

export default SecondPage;
