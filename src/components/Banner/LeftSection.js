import { Col } from 'react-bootstrap';
import AnimatedLogo from '../AnimatedLogo';

function LeftSection({ activePool }) {
  return (
    <Col lg={7} md={7} className='left_section'>
      <AnimatedLogo />
      <h2>{activePool.title}</h2>
      <p>{activePool.description}</p>
      <div className='social_icons'>
        {activePool.telegramlink && (
          <a href={activePool.telegramlink} target='_blank' rel='noreferrer'>
            <img src='../assets/social/telegram.png' alt='telegram' />
          </a>
        )}
        {activePool.twitterlink && (
          <a href={activePool.twitterlink} target='_blank' rel='noreferrer'>
            <img src='../assets/social/twitter.png' alt='twiter' />
          </a>
        )}
        {activePool.redditlink && (
          <a href={activePool.redditlink} target='_blank' rel='noreferrer'>
            <img src='../assets/social/reddit.png' alt='reddit' />
          </a>
        )}

        {activePool.discordlink && (
          <a href={activePool.discordlink} target='_blank' rel='noreferrer'>
            <img src='../assets/social/audit.png' alt='audit' />
          </a>
        )}

        {activePool.websitelink && (
          <a href={activePool.websitelink} target='_blank' rel='noreferrer'>
            <img src='../assets/social/website.png' alt='website' />
          </a>
        )}

        {activePool.auditlink && (
          <a href={activePool.auditlink} target='_blank' rel='noreferrer'>
            <img src='../assets/social/audit.png' alt='audit' />
          </a>
        )}
        {activePool.instagramLink && (
          <a href={activePool.instagramLink} target='_blank' rel='noreferrer'>
            <img src='../assets/social/insta.png' alt='instagram' />
          </a>
        )}
      </div>
    </Col>
  );
}

export default LeftSection;
