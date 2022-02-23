import {Container, Grid, GridColumn, Image, Input} from 'semantic-ui-react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">

          <GridColumn width={8} className="top-bar__left">
            <Logo/>
          </GridColumn>

          <GridColumn width={8} className="top-bar__right">
            <Search/>
          </GridColumn>

        </Grid>
      </Container>
    </div>
  )
}

function Logo(){
  return (
    <Link href="/">
      <a>
        <Image src="/logo.png" alt="Gaming"/>
      </a>
    </Link>
  );
}

function Search(){
  return(
    <Input id="search-game" icon={{name: "search"}} placeholder="Buscar..."/>
  )
}
