import styled from 'styled-components';

const HomePage = () => {
  return (
    <Div>
      Hello, my friend! <br />
      This application will help you keep your contacts in a safe place and
      always have access to them. Use and enjoy! ;)
    </Div>
  );
};
const Div = styled.div`
  font-size: 20px;
  width: 100%;
  padding: 40px 20px;
`;

export default HomePage;
