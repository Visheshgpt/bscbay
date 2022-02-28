function SocialLink({ slink, name }) {
  if (!slink) return null;
  return (
    <a href={slink} target='_blank' rel='noreferrer'>
      <img src={`/assets/social/${name}.png`} alt={name} />
    </a>
  );
}

export default SocialLink;
