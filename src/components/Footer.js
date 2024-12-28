import styled from "styled-components";

function Last(){
    return(
    <>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-white">© 2021 Company, Inc</p>

    <Logo>
        <img src="/images/app-logo.png" alt="NewCineWhi" />
      </Logo>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="/detail" class="nav-link px-2 text-white">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">About</a></li>
    </ul>
  </footer>
    </>
    );
}


const Logo = styled.a`
  padding: 0;
  width: 100px;
  margin-top: 4px;
  max-height: 80px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

export default Last;