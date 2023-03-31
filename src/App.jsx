import HomePage from "./pages/homePage/homePage";
import HybridClasses from "./pages/hybridClasses/hybridClasses";
import KampusMerdeka from "./pages/kampusMerdeka/KampusMerdeka";
import MyAccount from "./pages/myAccount/MyAccount";
import RecordedLearning from "./pages/recordedLearning/RecordedLearning";
import LayoutComponent from "./components/layouts/LayoutComponent";
import Route from "./router/route";
function App() {
  return (
    <LayoutComponent>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/courses">
        <HybridClasses />
      </Route>
      <Route path="/recorded-learning">
        <RecordedLearning />
      </Route>
      <Route path="/kampus-merdeka">
        <KampusMerdeka />
      </Route>
      <Route path="/my-account">
        <MyAccount />
      </Route>
    </LayoutComponent>
  );
}

export default App;
