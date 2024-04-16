import { Card } from "./components";
import cacto from "./assets/cactus_img.jpg";
function App() {
  return (
    <div className="container">
      <Card
        title="Embracing Minimalism"
        body="From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity."
        author="Annie Spratt"
        image={cacto}
      />
    </div>
  );
}

export default App;
