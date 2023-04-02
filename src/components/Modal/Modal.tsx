import useEpisodes from "@/hooks/episodes";
import { ICharacter } from "@/models/character";
import { Container, Modal, Typography } from "@mui/material";
import { ModalContainer } from "./Modal.styles";

interface ModalProps {
  selectedCharacter: ICharacter;
  handleClose: (value: boolean) => void;
  open: boolean;
}
export const ModalItem = ({
  selectedCharacter,
  handleClose,
  open,
}: ModalProps): JSX.Element => {
  const { data } = useEpisodes({ initialIds: extractEpisodeIds() });
  function extractEpisodeIds() {
    return selectedCharacter.episode.map((episodeUrl) => {
      const id = episodeUrl.split("/").pop();
      return id ? parseInt(id) : 0;
    });
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContainer>
        {selectedCharacter && (
          <div>
            <Typography variant="h5">{selectedCharacter.name}</Typography>
            <Typography variant="subtitle1">
              Status: {selectedCharacter.status}
            </Typography>
            <Typography variant="subtitle1">
              Species: {selectedCharacter.species}
            </Typography>
            {selectedCharacter.type && (
              <Typography variant="subtitle1">
                Type: {selectedCharacter.type}
              </Typography>
            )}
            <Typography variant="subtitle1">
              Gender: {selectedCharacter.gender}
            </Typography>
            <Typography variant="subtitle1">
              Origin: {selectedCharacter.origin.name}
            </Typography>
            <Typography variant="subtitle1">
              Location: {selectedCharacter.location.name}
            </Typography>
            {data?.data && data?.data.length > 0 && (
              <div style={{ display: "flex" }}>
                <Typography variant="subtitle1">Episodes:</Typography>
                <Container style={{ height: 300, overflowY: "scroll" }}>
                  <ul>
                    {data?.data.map((episode) => (
                      <li key={episode.id}>{episode.name}</li>
                    ))}
                  </ul>
                </Container>
              </div>
            )}
          </div>
        )}
      </ModalContainer>
    </Modal>
  );
};

export default ModalItem;
