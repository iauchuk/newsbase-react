import {makeStyles} from "@mui/styles";

interface styledHeaderProps {
  color: string;
}

const styledHeader = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: `24px 0`,
  },
  headerItem: {
    margin: `0 24px`,
    color: (props: styledHeaderProps) => {return props?.color},
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
  },
  headerItemActive: {
     borderBottom: '1px solid black'
  }
});

export default styledHeader;