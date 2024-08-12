import React from "react";

const App = () => {
  let id = 0;
  const increment = () => {
    return id++;
  };

  return (
    <div>
      <h1>Param</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        autem et iusto, fugiat consequuntur facere, obcaecati, pariatur
        repudiandae sequi aliquid corrupti velit itaque est sunt hic esse
        quisquam. Labore exercitationem harum eius dolore. Assumenda deserunt
        quia architecto, officia quisquam provident vero debitis similique cum,
        molestias placeat quibusdam natus, quis nesciunt.
      </p>
      <button onClick={increment}>Add</button>
    </div>
  );
};

export default App;
