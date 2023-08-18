const Test = ({ datas }) => {
  return (
    <div>

      {datas.map((data) => {
        return (
          Object.values(data).slice(1).map((el) => (
            <div key={el.id}>
              <img src={el.img} alt={el.name} />
            </div>
          ))
        );
      })}

    </div>
  );
};


export default Test;
