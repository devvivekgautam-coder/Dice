function Dice({ num }) {

    function getDots() {
        if (num === 1) {
            return [<span className="dot center"></span>];
        }

        if (num === 2) {
            return [
                <span className="dot top-left"></span>,
                <span className="dot bottom-right"></span>
            ];
        }

        if (num === 3) {
            return [
                <span className="dot top-left"></span>,
                <span className="dot center"></span>,
                <span className="dot bottom-right"></span>
            ];
        }

        if (num === 4) {
            return [
                <span className="dot top-left"></span>,
                <span className="dot top-right"></span>,
                <span className="dot bottom-left"></span>,
                <span className="dot bottom-right"></span>
            ];
        }

        if (num === 5) {
            return [
                <span className="dot top-left"></span>,
                <span className="dot top-right"></span>,
                <span className="dot center"></span>,
                <span className="dot bottom-left"></span>,
                <span className="dot bottom-right"></span>
            ];
        }

        if (num === 6) {
            return [
                <span className="dot top-left"></span>,
                <span className="dot top-right"></span>,
                <span className="dot mid-left"></span>,
                <span className="dot mid-right"></span>,
                <span className="dot bottom-left"></span>,
                <span className="dot bottom-right"></span>
            ];
        }
    }

    return (
        <div className="dice">
            {getDots()}
        </div>
    );
}

export default Dice;