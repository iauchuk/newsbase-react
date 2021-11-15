import {makeStyles} from "@mui/styles";

interface styledCustomTableInterface {
  backgroundHeader: string,
  backgroundFirsts: string,
}

const styledCustomTable = makeStyles({
  customTableWrapper: {
    height: `520px`,
    width: `100%`,
    '& tbody': {
      '& td, & th': {
        '&:first-child, &:nth-child(2)': {
        position: 'sticky',
        zIndex: 2,
        background: (props: styledCustomTableInterface) => {return props.backgroundFirsts}
      },
      }
    },
    '& th': {
      position: `sticky`,
      top: 0,
      zIndex: 3,
      background: (props: styledCustomTableInterface) => {return props.backgroundHeader},
      textAlign: `right`,
      '&:first-child': {
        left: 0
      },
      '&:nth-child(2)': {
        left: `150px`,
      },
      '&:first-child, &:nth-child(2)': {
        zIndex: 4,
        '& p': {
          width: `inherit`,
        }
      }
    },
    '& td': {
      '& p': {
        wordBreak: `break-word`,
      }
    },
    '& th, & td': {
      overflow: `hidden`,
      minWidth: `150px`,
      width: `800px`,
      '&:first-child, &:nth-child(2)': {
        width: `150px`,
        maxWidth: `150px`,
        boxSizing: `border-box`,
        textAlign: `left`,
      }
    }
  },
  customTableWrapperImage: {
    maxWidth: `80px`,
    maxHeight: `80px`,
  },
  contentCell: {
    '&  p': {
      maxWidth: `300px`,
      overflow: `hidden`,
      textOverflow: `ellipsis`,
      whiteSpace: `nowrap`,
    }
  },
  pagination: {
    float: `left`,
  }
});

export default styledCustomTable;