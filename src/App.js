import './sass/style.scss'
import {Header,NavItem,Section,DropDown,DropDownCompany} from './Components';
import arrowDown from './images/icon-arrow-down.svg';

function App() {
  return (
    <div className="App">
     <Header>
      <NavItem
      text='Features'
      src={arrowDown}
      >
        <DropDown>
           
        </DropDown>
      </NavItem>

       <NavItem
      text='Company'
      src={arrowDown}>
        <DropDownCompany>
           
        </DropDownCompany>
      </NavItem>

      <NavItem
      text='Carrers'/> 

      <NavItem
      text='About'/>
     </Header>
     <Section/>
    </div>
  );
}

export default App;
