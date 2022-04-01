import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "../styles/Home.module.css";
import { AnimatePresence } from 'framer-motion'

export const CircleIndicator = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <svg className="progress-icon" viewBox="0 0 60 60">
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="black"
        strokeDasharray="0 1"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          pathLength,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1,
        }}
      />
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="black"
        d="M14,26 L 22,33 L 35,16"
        initial={false}
        strokeDasharray="0 1"
        animate={{ pathLength: isComplete ? 1 : 0 }}
      />
    </svg>
  );
};

export const LineIndicator = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <svg className="progress-line" viewBox="0 0 8 184">
      <motion.path
        fill="none"
        strokeWidth="15"
        stroke="black"
        d="M4 4V180"
        style={{
          pathLength,
        }}
      />
    </svg>
  );
};

export const ComplexIndicator = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <>
      <svg className="complex-line" viewBox="-7 0 215 205">
      <motion.path
        fill="none"
        strokeWidth="12"
        stroke="black"
        d="M17 45C17 58.8148 17 72.6296 17 86.4444C17 92.6111 17 98.7778 17 104.944C17 109.3 20.2623 108.014 23.0556 105.5C27.7686 101.258 37.741 99 43.7778 99C51.0305 99 58.6721 107.217 51.8889 114C44.8278 121.061 37 123.834 37 134.944C37 139.83 37.4502 141.068 43 141.778C48.4348 142.473 56.2914 141.666 56 148.222C55.5509 158.326 42 163.414 42 174.667C42 187.241 61.8165 184.248 69.8889 184C82.3645 183.616 89.4146 167.662 91 157.556C92.074 150.709 92 143.96 92 137.056C92 133.606 90.1041 132.175 89.1111 129.444C88.6023 128.045 87.7483 124.422 88.2222 123C89.3519 119.611 96.2048 120.34 99 119.222C105.413 116.657 110.811 123.078 115.611 126C121.779 129.754 130.549 137.281 138.222 132.778C143.479 129.692 149.539 124.489 149.944 118C150.242 113.24 151.531 105.095 146.889 102.111C136.841 95.652 123.83 94.9176 114.222 88C111.425 85.986 112 80.444 112 77.4444C112 69.6234 118.856 66.842 124.389 62.6111C129.987 58.3298 139.467 57.6864 146.111 56.5C157.184 54.5228 159.769 43.3977 156.556 33C153.605 23.4525 146.15 19 136.556 19C132.823 19 132.057 19.5782 130 22.7778C127.302 26.9749 124.348 28.7639 120 31C117.582 32.2436 114.796 34.692 111.944 33.4444C105.408 30.5847 104.414 21.6944 101.778 16C100.441 13.1118 99.5452 9.1663 97.5 6.66665C95.0562 3.67975 89.5899 7.58029 88.5556 9.94443C85.735 16.3915 86.3188 23.5359 82.7778 29.5555C79.9128 34.426 70.8802 20.3459 69.4444 18.5C67.0688 15.4456 58 14.0337 58 19.5C58 25.6232 52.2095 30.4878 46 27.5555C39.578 24.523 34.8637 19.8889 30.5 14.5555C26.8394 10.0815 19.6769 2.24824 13.2222 1.99999C7.34893 1.77409 2 0.709884 2 7.94443C2 15.3757 4.53017 17.732 9.77778 22.7778C13.1586 26.0286 17 28.0466 17 33.5C17 37.6136 16 41.2762 16 45Z"
        style={{
          pathLength,
        }}
      />
    </svg>
    <svg className="caribou-logo" viewBox="0 0 28 48">
      <motion.path
      fill={isComplete ? 'black': 'none'}
      strokeWidth={isComplete ? '.5': '1'}
      stroke='black'
      d="M14.8294 5.90623C13.0589 9.43091 12.9645 13.4795 14.5225 16.9328C12.7284 14.6346 11.0878 12.384 10.5212 9.39519C10.0373 6.88266 9.91926 3.89382 10.8163 0C7.20452 6.25155 7.38157 11.61 10.3914 15.9087C13.4484 20.2669 18.3113 23.1248 24.8031 26.0779C24.4861 25.7755 24.1215 25.4529 23.7216 25.099C21.9327 23.5162 19.439 21.3097 17.3553 17.5043C15.6438 14.3726 15.0301 10.8956 14.8294 5.90623ZM14.0015 22.0889L14.0019 22.0887C8.81919 19.2347 6.60906 16.5777 5.37451 15.0935C5.32135 15.0296 5.27 14.9679 5.2203 14.9084C3.7449 21.4814 8.08848 22.9223 10.9567 23.1128H10.9768L10.9765 23.1129H10.9562C6.87224 24.8752 4.31094 26.9591 2.30439 30.3051C-0.752638 35.3778 -0.10346 39.6765 0.533913 41.8913C1.15948 44.0466 3.08341 47.0474 4.27553 48C0.722765 39.7956 2.10374 34.9015 4.29914 31.5554C6.22306 28.6142 8.47748 26.6971 12.3607 25.0896C12.762 24.9228 13.1988 24.7561 13.6709 24.5775C13.7366 24.6107 13.8074 24.6438 13.8834 24.6794C13.971 24.7204 14.0654 24.7646 14.1666 24.8157C17.082 26.1851 20.4695 27.614 22.9482 28.65L23.0663 28.6976L22.1338 29.6621C21.8977 29.9122 21.5554 30.0193 21.225 29.9598C19.9502 29.7336 18.2623 29.6859 17.4479 29.6859C9.82304 29.6859 5.9988 32.6033 4.8775 36.8663C4.1457 39.6527 5.11356 42.5582 6.70699 44.4872C8.70174 46.9045 11.9594 47.9881 15.0755 47.9881H21.1069C18.6164 46.7021 16.2322 45.1541 14.7922 43.5227C13.2342 41.7604 11.9948 39.3312 12.4434 36.6162C12.8211 34.2823 14.5089 32.2223 17.1646 32.0556H17.4597C17.9673 32.0556 18.4866 32.0794 18.9823 32.1151H19.0178C20.021 32.1985 21.0243 32.3652 21.9213 32.6033C22.842 32.8415 23.8217 32.5676 24.4826 31.877L28 28.2332L27.4098 28.0189C27.4 28.0139 27.2469 27.9497 26.9781 27.8369C25.3041 27.1346 19.143 24.5498 15.1463 22.6723C14.7568 22.4937 14.3674 22.2913 14.0015 22.0889Z"
      style={{
        pathLength,
      }}
      />
    </svg> 
    </>
  );
};


const ProgressBar = () => {
  return (
    <AnimatePresence>
    <motion.main className={styles.main}
      exit={{backgroundColor: 'yellow', transition: 'easeInOut', delay: 3}}
    >
      <div className={styles.grid}>
        <CircleIndicator />
        <LineIndicator />
        <ComplexIndicator/>
        <h1><br/>Start Scrolling &darr;</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in
          massa tempor nec feugiat nisl pretium fusce id. Egestas purus viverra
          accumsan in nisl nisi scelerisque. Nam aliquam sem et tortor consequat
          id porta nibh. Consectetur adipiscing elit ut aliquam purus sit. Ut
          aliquam purus sit amet luctus venenatis lectus magna fringilla. Vitae
          purus faucibus ornare suspendisse sed. Nulla aliquet enim tortor at
          auctor urna. Nec ultrices dui sapien eget mi proin sed libero. Amet
          est placerat in egestas erat imperdiet sed. Netus et malesuada fames
          ac. Hendrerit gravida rutrum quisque non. Quam quisque id diam vel
          quam elementum pulvinar. In est ante in nibh mauris cursus mattis
          molestie a. Proin fermentum leo vel orci porta. Dignissim suspendisse
          in est ante in. Risus feugiat in ante metus dictum at. Viverra mauris
          in aliquam sem fringilla ut morbi tincidunt. Ut sem nulla pharetra
          diam sit amet nisl. Praesent elementum facilisis leo vel fringilla.
          Placerat duis ultricies lacus sed turpis tincidunt id. Auctor eu augue
          ut lectus arcu. Sed enim ut sem viverra aliquet eget sit amet. Amet
          consectetur adipiscing elit pellentesque habitant. Lacinia at quis
          risus sed. Sed libero enim sed faucibus. Porta lorem mollis aliquam ut
          porttitor leo a diam sollicitudin. Lobortis mattis aliquam faucibus
          purus in massa tempor nec. Quam id leo in vitae turpis massa sed.
          Aliquam purus sit amet luctus. Vitae auctor eu augue ut lectus arcu
          bibendum at varius. Elit at imperdiet dui accumsan sit amet nulla.
          Convallis aenean et tortor at risus viverra. Quam lacus suspendisse
          faucibus interdum posuere lorem. Rhoncus aenean vel elit scelerisque
          mauris pellentesque pulvinar pellentesque. Vel turpis nunc eget lorem
          dolor sed viverra. Praesent semper feugiat nibh sed pulvinar proin
          gravida hendrerit lectus. Cras ornare arcu dui vivamus. Est ultricies
          integer quis auctor. Odio morbi quis commodo odio aenean sed.
          Adipiscing at in tellus integer feugiat scelerisque varius. Ultricies
          integer quis auctor elit. Diam volutpat commodo sed egestas egestas
          fringilla. Auctor augue mauris augue neque gravida. Etiam tempor orci
          eu lobortis elementum nibh tellus molestie nunc. Lectus vestibulum
          mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mauris augue
          neque gravida in fermentum et. Ornare arcu dui vivamus arcu. Risus
          quis varius quam quisque id diam. Volutpat sed cras ornare arcu dui
          vivamus. Vitae proin sagittis nisl rhoncus mattis rhoncus urna.
          Bibendum est ultricies integer quis auctor elit sed. Condimentum
          mattis pellentesque id nibh tortor id aliquet lectus proin. Ultrices
          neque ornare aenean euismod elementum nisi. Posuere morbi leo urna
          molestie at elementum eu facilisis. Cras ornare arcu dui vivamus arcu
          felis bibendum ut. Etiam tempor orci eu lobortis elementum nibh.
          Feugiat vivamus at augue eget arcu dictum varius duis at. Faucibus et
          molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Arcu
          cursus vitae congue mauris rhoncus aenean. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Eget arcu dictum
          varius duis at. Bibendum at varius vel pharetra vel turpis nunc. Sed
          adipiscing diam donec adipiscing. Purus ut faucibus pulvinar elementum
          integer enim neque volutpat ac. Convallis a cras semper auctor. Et
          odio pellentesque diam volutpat commodo sed. Dolor sit amet
          consectetur adipiscing elit pellentesque habitant morbi tristique.
          Nullam ac tortor vitae purus faucibus ornare. Duis convallis convallis
          tellus id. Sodales ut eu sem integer. Ut faucibus pulvinar elementum
          integer enim neque. Arcu ac tortor dignissim convallis. Nec dui nunc
          mattis enim ut tellus. Nibh venenatis cras sed felis eget velit.
          Bibendum neque egestas congue quisque egestas diam in. Faucibus turpis
          in eu mi bibendum. Ipsum suspendisse ultrices gravida dictum fusce ut
          placerat orci. Nullam ac tortor vitae purus. Aenean et tortor at risus
          viverra adipiscing at. Amet mattis vulputate enim nulla aliquet
          porttitor. Condimentum id venenatis a condimentum vitae sapien
          pellentesque habitant morbi. Imperdiet dui accumsan sit amet nulla
          facilisi morbi. Ultricies lacus sed turpis tincidunt id aliquet risus.
          Ac orci phasellus egestas tellus. Quis vel eros donec ac odio tempor
          orci dapibus ultrices. Est ullamcorper eget nulla facilisi etiam. Nam
          at lectus urna duis convallis convallis tellus id interdum. Varius
          duis at consectetur lorem donec massa sapien faucibus et. Feugiat
          pretium nibh ipsum consequat nisl vel. Ipsum a arcu cursus vitae
          congue mauris. Habitant morbi tristique senectus et netus et. Velit
          sed ullamcorper morbi tincidunt ornare massa. Amet consectetur
          adipiscing elit duis tristique sollicitudin nibh. Egestas quis ipsum
          suspendisse ultrices gravida dictum fusce ut placerat. Gravida dictum
          fusce ut placerat orci nulla pellentesque dignissim. Senectus et netus
          et malesuada fames ac. Tincidunt dui ut ornare lectus sit amet est
          placerat in. Ornare suspendisse sed nisi lacus sed. Pharetra diam sit
          amet nisl suscipit. Fusce id velit ut tortor pretium viverra
          suspendisse potenti nullam. Pellentesque adipiscing commodo elit at
          imperdiet dui accumsan. Nascetur ridiculus mus mauris vitae ultricies
          leo integer malesuada nunc. Tincidunt tortor aliquam nulla facilisi
          cras fermentum odio eu feugiat. Nisl suscipit adipiscing bibendum est
          ultricies integer. Dui faucibus in ornare quam viverra orci sagittis
          eu volutpat. Nulla pharetra diam sit amet nisl suscipit adipiscing
          bibendum. Adipiscing at in tellus integer feugiat scelerisque varius.
          Faucibus et molestie ac feugiat sed lectus. Odio ut enim blandit
          volutpat maecenas volutpat blandit aliquam. Nam libero justo laoreet
          sit amet cursus. Nam at lectus urna duis convallis convallis tellus.
          Tortor posuere ac ut consequat semper viverra nam libero justo. Et
          egestas quis ipsum suspendisse ultrices. Convallis posuere morbi leo
          urna. Fringilla est ullamcorper eget nulla facilisi etiam. Feugiat
          pretium nibh ipsum consequat nisl vel. Neque ornare aenean euismod
          elementum nisi quis. Et ligula ullamcorper malesuada proin libero nunc
          consequat interdum. Nunc faucibus a pellentesque sit amet. Adipiscing
          at in tellus integer feugiat scelerisque varius morbi enim. Et netus
          et malesuada fames ac turpis egestas sed tempus. Quis ipsum
          suspendisse ultrices gravida dictum. Volutpat blandit aliquam etiam
          erat velit scelerisque in. Fames ac turpis egestas sed. Enim diam
          vulputate ut pharetra. Ac turpis egestas sed tempus urna et pharetra
          pharetra. Sed viverra ipsum nunc aliquet bibendum enim facilisis
          gravida. Tristique risus nec feugiat in fermentum posuere urna.
          Ultrices tincidunt arcu non sodales neque sodales ut etiam. Urna nunc
          id cursus metus. Bibendum est ultricies integer quis auctor elit sed
          vulputate mi. Cursus turpis massa tincidunt dui ut ornare lectus sit.
          Consequat ac felis donec et odio. Pulvinar elementum integer enim
          neque volutpat. Morbi tristique senectus et netus et. Convallis aenean
          et tortor at risus viverra adipiscing. Lobortis feugiat vivamus at
          augue. Egestas fringilla phasellus faucibus scelerisque eleifend.
          Fringilla ut morbi tincidunt augue. Est ante in nibh mauris. Et netus
          et malesuada fames ac. Id ornare arcu odio ut sem nulla pharetra diam.
          Ut faucibus pulvinar elementum integer enim neque. Sed vulputate odio
          ut enim blandit. Urna condimentum mattis pellentesque id nibh. Aliquam
          eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
          Fames ac turpis egestas sed tempus urna. Lobortis elementum nibh
          tellus molestie nunc non blandit. Vitae nunc sed velit dignissim
          sodales ut. Venenatis a condimentum vitae sapien pellentesque
          habitant. Venenatis urna cursus eget nunc. Ultrices mi tempus
          imperdiet nulla malesuada pellentesque elit eget gravida. Molestie a
          iaculis at erat. Id velit ut tortor pretium viverra. Cras adipiscing
          enim eu turpis egestas pretium. Dui sapien eget mi proin sed libero
          enim sed faucibus. Integer malesuada nunc vel risus commodo viverra.
          Nisi est sit amet facilisis magna etiam tempor. Massa tincidunt nunc
          pulvinar sapien et ligula ullamcorper malesuada. Justo laoreet sit
          amet cursus sit amet dictum sit amet. Commodo elit at imperdiet dui
          accumsan sit amet nulla facilisi. Ante in nibh mauris cursus. Non quam
          lacus suspendisse faucibus interdum posuere lorem. Hendrerit dolor
          magna eget est lorem. Bibendum est ultricies integer quis auctor elit
          sed. Eget egestas purus viverra accumsan in. Convallis posuere morbi
          leo urna molestie at elementum eu facilisis. Risus sed vulputate odio
          ut enim blandit volutpat maecenas volutpat. Nunc sed blandit libero
          volutpat. Mauris pharetra et ultrices neque ornare aenean euismod
          elementum. Eget velit aliquet sagittis id consectetur purus ut
          faucibus pulvinar. Id leo in vitae turpis massa. Amet dictum sit amet
          justo donec enim. Quis imperdiet massa tincidunt nunc pulvinar. Ut
          tristique et egestas quis ipsum suspendisse ultrices gravida.
          Imperdiet nulla malesuada pellentesque elit eget gravida. Bibendum est
          ultricies integer quis auctor elit sed. Fringilla est ullamcorper eget
          nulla facilisi etiam dignissim diam quis. Amet commodo nulla facilisi
          nullam vehicula ipsum a arcu cursus. Dis parturient montes nascetur
          ridiculus mus mauris vitae. Enim neque volutpat ac tincidunt vitae
          semper quis lectus. Urna et pharetra pharetra massa massa ultricies.
          Tincidunt eget nullam non nisi est sit amet facilisis magna. Enim
          blandit volutpat maecenas volutpat blandit. Consectetur a erat nam at
          lectus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices
          sagittis. Amet justo donec enim diam vulputate ut pharetra sit amet.
          Et egestas quis ipsum suspendisse ultrices gravida dictum fusce.
          Convallis a cras semper auctor neque vitae tempus. Sodales ut eu sem
          integer vitae justo. Scelerisque eu ultrices vitae auctor eu augue ut
          lectus. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae.
          Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Tincidunt
          lobortis feugiat vivamus at augue eget arcu dictum. Volutpat commodo
          sed egestas egestas. Et odio pellentesque diam volutpat commodo sed
          egestas egestas. Tortor consequat id porta nibh venenatis. Odio
          euismod lacinia at quis risus. Sed ullamcorper morbi tincidunt ornare
          massa eget egestas purus. Turpis massa sed elementum tempus egestas.
          Diam sollicitudin tempor id eu.
        </p>
      </div>
    </motion.main>
    </AnimatePresence>
  );
};

export default ProgressBar;
