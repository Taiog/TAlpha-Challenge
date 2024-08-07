
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
    }
  },
}