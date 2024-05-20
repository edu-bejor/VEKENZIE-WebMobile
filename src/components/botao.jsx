const Botao = ({ texto, onClick }) => {
    return (
        <button onClick={onClick} style={{
            backgroundColor: '#63E100',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '10px',
            cursor: 'pointer',
            border: 'none',
            width: '150px'
        }}>
            {texto}
        </button>
    );
};

export default Botao;
