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
      <div style={{ position: 'relative' }}>
        <div className={styles.tracksText}
          style={{
            fontSize: 50,
            padding: 20,
            letterSpacing: 5,
            position: 'absolute',
            top: '10px',
          }}>
          TRACKS
        </div>
        <div style={{
          position: 'relative',
          top: '50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // Added this property
          height: '100%'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <img src="/images/tracks/prev_version/politics.svg" className={styles.trackimage} alt="Politics Image" style={{ width: "80%", maxWidth: '440px' }} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <img src="/images/tracks/prev_version/environment.svg" className={styles.trackimage} alt="Environment Image" style={{ width: "80%", maxWidth: '440px' }} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <img src="/images/tracks/prev_version/mental_health.svg" className={styles.trackimage} alt="Mental Health Image" style={{ width: "80%", maxWidth: '440px' }} />
          </div>
        </div>
      </div>
    </Container >

  );
};

export default HomePageLeft;
