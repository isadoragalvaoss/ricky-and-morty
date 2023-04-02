import { useCharacterContext } from "@/context/CharacterContext/CharacterContext";
import {
  Box,
  Button,
  ClickAwayListener,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { FilterContainer } from "./Filter.styles";
export const Filter = (): JSX.Element => {
  const { handleFilters } = useCharacterContext();

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");

  const handleFilterChange = () => {
    handleFilters({ name, status, species, type, gender });
    setOpen(false);
  };

  const handleResetFilters = () => {
    setName("");
    setStatus("");
    setSpecies("");
    setType("");
    setGender("");
    handleFilters(undefined);
    setOpen(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value);
  };

  const handleSpeciesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpecies(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGender(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const router = useRouter();
  const route = router.pathname;

  const isFavorite = route === "/favorites";

  const handleRoute = () => {
    if (route === "/favorites") router.push("/");
    if (route === "/") router.push("/favorites");
  };

  return (
    <ClickAwayListener
      onClickAway={handleClickAway}
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
    >
      <Box sx={{ position: "absolute", marginTop: 2, marginLeft: 3 }}>
        {!isFavorite && (
          <Button type="button" onClick={handleClick}>
            FILTERS
          </Button>
        )}
        <Button onClick={handleRoute}>
          {router.pathname === "/favorites" ? "All" : "Favorites"}
        </Button>

        {open ? (
          <FilterContainer>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
              defaultValue={name}
            />
            <FormControl variant="outlined" style={{ width: "140px" }}>
              <InputLabel id="status-select-label">Status</InputLabel>
              <Select
                labelId="status-select-label"
                id="status-select"
                value={status}
                onChange={handleStatusChange}
                label="Status"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="alive">Alive</MenuItem>
                <MenuItem value="dead">Dead</MenuItem>
                <MenuItem value="unknown">Unknown</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Species"
              variant="outlined"
              value={species}
              onChange={handleSpeciesChange}
            />
            <TextField
              label="Type"
              variant="outlined"
              value={type}
              onChange={handleTypeChange}
            />
            <FormControl variant="outlined" style={{ width: "140px" }}>
              <InputLabel id="gender-select-label">Gender</InputLabel>
              <Select
                labelId="gender-select-label"
                id="gender-select"
                value={gender}
                onChange={handleGenderChange}
                label="Gender"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="genderless">Genderless</MenuItem>
                <MenuItem value="unknown">Unknown</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={handleFilterChange}>Filter</Button>
            <Button onClick={handleResetFilters}>Reset</Button>
          </FilterContainer>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};

export default Filter;
