
export const styles = {
  global: () => {
    return {
      'html, body': {
        bg: '#ffffff',
        color: '#000000',
        height: '100vh',
        width: '100%',
      },

      '::-webkit-scrollbar': {
        display: 'block',
        width: '5px',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '999px',
        display: 'block',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
        display: 'block',
      },

      '& .jotai-devtools-UnstyledButton-root': {
        background: 'transparent !important',
        '& img': {
          position: 'absolute',
          left: '30px !important',
          bottom: '0px !important',
          height: '25px !important',
        },
      },

      '& .btn-react-query-dev-tools': {
        position: 'absolute !important',
        left: '-5px !important',
        bottom: '-5px !important',
        width: '30px !important',
      },
    }
  },
}