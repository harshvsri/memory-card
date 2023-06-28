interface Prop {
  color: {
    name: string;
    hex: string;
  };
  onClick: (color: string) => void;
}

function Card({ color, onClick }: Prop) {
  return (
    <>
      <div
        className="card m-2 border rounded"
        style={{ width: "18rem", borderBlockColor: "#baeffb" }}
        onClick={() => onClick(color.name)}
      >
        <div
          className="border rounded-top"
          style={{
            height: "200px",
            width: "auto",
            backgroundColor: `${color.hex}`,
          }}
        ></div>
        <div className="card-body">
          <p className="card-text fw-bold" style={{ color: `${color.hex}` }}>
            {color.name}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
