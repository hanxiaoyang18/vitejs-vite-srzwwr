export default function Profil({ name, img, phone }) {
  return (
    <article className="profil">
      <img src={img} alt={name} width="100" className="profil__avatar" />

      <div className="profil__content">
        <p className="profil__name">{name}</p>
        <p className="profil__number">{phone}</p>
      </div>
    </article>
  );
}
