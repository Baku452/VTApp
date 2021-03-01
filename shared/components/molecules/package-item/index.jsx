import Link from 'next/link';

const borderColor = '1px solid #e6e6e6';

function Days({ days }) {
  function getNameDays(day) {
    switch (day) {
      case 0:
        return 'Half-Day';
      case 1:
        return 'Full Day';
      default:
        return `${day} days`;
    }
  }
  return <h6 className="fs-13 m-0">{getNameDays(days)}</h6>;
}

function PackageItem({ title, days, slug, thumbnail }) {
  return (
    // <Link href={`/package/${slug}`}>
    <Link href={`/${slug}`}>
      <div className="card w-100 cursor-pointer">
        <img src={thumbnail} className="card-img-top" alt={title} />

        <div
          className="card-body"
          style={{
            borderLeft: borderColor,
            borderRight: borderColor,
            borderBottom: borderColor,
          }}>
          <div className="row align-items-start justify-content-start">
            <div className="col-12">
              <h5 className="card-title font-weight-bold fs-18 lh-23">{title}</h5>
              <Days days={days} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { PackageItem };
