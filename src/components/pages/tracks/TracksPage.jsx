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
        <img style={{
          display: 'flex',
          height: '20%'
        }} 
        src="/images/tracks/tracks_title.svg"/>
        <img style={{
          display: 'flex',
          height: '20%'
        }} 
        src="/images/tracks/politics_title.svg"/>
        <img style={{
          display: 'flex',
          height: '20%'
        }} 
        src="/images/tracks/politics_text.svg"/>
        <img style={{
          display: 'flex',
          height: '20%'
        }} 
        src="/images/tracks/white_house.svg"/>
        <img style={{
          display: 'flex',
          height: '20%'
        }} 
        src="/images/tracks/environment.svg"/>
        <img style={{
          display: 'flex',
          height: '20%'
        }} 
        src="/images/tracks/mental_health_title.svg"/>
        <img style={{
          display: 'flex',
          height: '20%'
        }} 
        src="/images/tracks/mental_health_text.svg"/>
        <img style={{
          display: 'flex',
          height: '20%'
        }} 
        src="/images/tracks/zen.svg"/>
        
      </div>
    </Container >

  );
};

export default TracksPage;
