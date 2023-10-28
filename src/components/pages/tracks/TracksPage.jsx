import styled from "@emotion/styled";
import styles from './tracks.module.css';

const HomePageLeft = (props) => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
    user-select: none;
  `;

  return (
    <Container>
      <div style={{display: 'flex'}}>
        <div className={styles.tracksText}
          style={{
            fontSize: 50,
            padding: 20,
            letterSpacing: 5,
          }}>
            TRACKS
          </div> 
          <div style={{
            border: '2px solid #000',
          }}>
            SOMEONE said that Rory has a mission for you...
          </div>
      </div>
    </Container>
   
  );
};

export default HomePageLeft;
