const Test = ({ datas }) => {
  return (
    <div>

      {datas.map((data) => {
        console.log(data.projects.gameScratch.id)
      })}

    </div>
  );
};


export default Test;
