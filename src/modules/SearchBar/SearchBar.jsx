import { Container, Row, Col } from "react-grid-system";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Heading from "../../Typography/Heading";
import { AiOutlineSearch } from "react-icons/ai";
import "./SearchBar.scss";
const SearchBar = (props) => {
  return (
    <Container className="searchBar" fluid>
      <Row className="searchBar__heading">
        <Heading variant="h5">Busque por serviços</Heading>
      </Row>
      <Row>
        <Col md={5} className="searchBar__col">
          <Input
            additionalClass="searchBar__input"
            placeholder="O que você procura?"
            type="text"
            onChange={() => console.log("change")}
            required
          />
        </Col>
        <Col md={4} className="searchBar__col">
          <Input
            additionalClass="searchBar__input"
            label="Categorias"
            placeholder=""
            type="text"
            onChange={() => console.log("change")}
            required
          />
        </Col>
        <Col md={3} className="searchBar__col">
          <Row>
            <Col md={9} className="searchBar__col">
              <Select
                onChange={() => console.log("change")}
                additionalClass="searchBar__select"
                label="Ordenar por"
                options={["teste1", "teste2"]}
              ></Select>
            </Col>
            <Col md={2} className="searchBar__col">
              <Button additionalClass="searchBar__button">
                <AiOutlineSearch></AiOutlineSearch>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
