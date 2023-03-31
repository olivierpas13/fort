// LogoSelectionModal.js
import StyledLogoSelectionModal from './StyledLogoSelectionModal';

const predefinedLogos = [
  'logo1.png',
  'logo2.png',
  'logo3.png',
  // Add more predefined logos here
];

const LogoSelectionModal = ({ handleLogoSelection, handleClose }) => {
  return (
    <StyledLogoSelectionModal onClick={handleClose}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>Select a Logo</h2>
        <div className="logo-selection">
          {predefinedLogos.map((logo) => (
            <img
              key={logo}
              src={`/logos/${logo}`}
              alt={`Logo ${logo}`}
              width={60}
              height={60}
              onClick={() => handleLogoSelection(logo)}
            />
          ))}
        </div>
      </div>
    </StyledLogoSelectionModal>
  );
};

export default LogoSelectionModal;
