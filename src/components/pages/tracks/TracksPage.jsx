import styled from "@emotion/styled";
import styles from './tracks.module.css';



const TracksPage = (props) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
    background-color: #e9e1d9;
    /* display: flex; */
    /* flex-direction: column; */

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
            <img src="/images/tracks/politics.svg" className={styles.trackimage} alt="Politics Image" style={{ width: "80%", maxWidth: '440px' }} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <img src="/images/tracks/environment.svg" className={styles.trackimage} alt="Environment Image" style={{ width: "80%", maxWidth: '440px' }} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <img src="/images/tracks/mental_health.svg" className={styles.trackimage} alt="Mental Health Image" style={{ width: "80%", maxWidth: '440px' }} />
          </div>
        </div>
      </div>
    </Container >

  );
};

export default TracksPage;
