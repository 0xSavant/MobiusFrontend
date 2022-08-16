import DashboardLayout from "components/DashboardLayout";
import Modal from "components/Modal";
import { useModal } from "hooks/useModal";

const Fundraiser = () => {
  const { setModal } = useModal();
  return (
    <>
      <Modal>
        <h3>Select contribution type</h3>
        <div>
          <button>Standard</button>
          <button>Yield</button>
        </div>
      </Modal>
      <DashboardLayout>
        <h1>Fundraiser name</h1>
        <div className="flex gap-4 items-center">
          <img className="w-1/3" src="/clemson_club.png" alt="" />
          <div>
            <h4>100 Sol raised</h4>
            <ul>
              <li>
                <strong>Total Contributions:</strong> 112
              </li>
              <li>
                <strong>Average Contributions: </strong> 1.223 SOL
              </li>
              <li>
                <strong>Created By: </strong> xAwM...Yx2d
              </li>
              <li>
                <strong>Token Enabled: </strong> No
              </li>
            </ul>

            <button
              onClick={() => setModal()}
              className="bg-blue-500 text-white mt-6"
            >
              Contribute
            </button>
            <div className="flex items-center gap-4">
              <button>Contact</button>
              <button>Website</button>
            </div>
          </div>
        </div>

        <h2 className="mt-6">About fundraiser</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          voluptatem tempora iure voluptatum! Soluta dolor atque unde fugiat
          expedita minima voluptatibus porro molestiae sunt quos.
        </p>

        <h2 className="mt-6">Top Contributors</h2>
        <ul>
          {Array.from(new Array(2)).map((_, i) => (
            <li key={i} className="flex justify-between items-center mb-3">
              <h5>yJRXL...5eAwM</h5>
              <h6>21 SOL</h6>
            </li>
          ))}
        </ul>
      </DashboardLayout>
    </>
  );
};

export default Fundraiser;
