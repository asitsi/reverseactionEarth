import AddIcon from '@mui/icons-material/Add';
import FormControl from '@mui/material/FormControl';
import { Box, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Popup from '../../components/Popup';

const Members = () => {
    const [dataRows, setDataRows] = useState(rows);
    const [ButtonPopup, setButtonPopup] = useState(false);
    const [Display, setDisplay] = useState("none");

    function handleClickShowPassword(event: any): void {
        throw new Error("Function not implemented.");
    }

    function handleMouseDownPassword(event: any): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="Main_Container">
            <section className="Main_Container" style={{ padding: '0 2rem' }}>
                <div className="heading">
                    <h2>Meambers</h2>
                    <div className="heading_contant">
                        <FormControl variant="outlined" style={{ width: '-webkit-fill-available' }}>
                            <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={'text'}
                                style={{ borderRadius: '30px' }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle search"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            style={{ marginRight: '0.5rem' }}
                                        >
                                            {<PersonSearchIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Search"
                            />
                        </FormControl>
                        <div className="add_member" onClick={() => setButtonPopup(true)}><AddIcon /><span>Add Members</span></div>
                    </div>
                </div>

                <div style={{ height: '100%', width: '100%' }}>
                    <DataGrid
                        rows={dataRows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 50 },
                            },
                        }}
                        pageSizeOptions={[50, 50]}
                        checkboxSelection
                    />
                </div>
                <Popup
                    trigger={ButtonPopup}
                    setTrigger={setButtonPopup}
                    className="Popup"
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                        <h1>Upload CVG</h1>
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} style={{ background: 'rgba(56, 204, 119, 1)' }}>
                            Upload file
                            <VisuallyHiddenInput type="file" />
                        </Button>
                    </Box>
                </Popup>
            </section>

        </div>
    );
};

export default Members;

export const rows = [
    { id: 1, email: 'Snow@gmil.com', Display_Name: 'Jon', Date_Joined: '4/4/2023 2:35 PM', Last_Seen: '4/4/2023 2:35 PM', Role: 'orgOwner', Member_ID: 35, image: "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_1280.png" },
    { id: 2, email: 'Lannister@gmil.com', Display_Name: 'Cersei', Date_Joined: '4/4/2023 2:35 PM', Last_Seen: '4/4/2023 2:35 PM', Role: 'orgOwner', Member_ID: 42, image: "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_1280.png" },
    { id: 3, email: 'Lannister@gmil.com', Display_Name: 'Jaime', Date_Joined: '4/4/2023 2:35 PM', Last_Seen: '4/4/2023 2:35 PM', Role: null, Member_ID: 45, image: "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_1280.png" },
    { id: 4, email: 'Stark@gmil.com', Display_Name: 'Arya', Date_Joined: '4/4/2023 2:35 PM', Last_Seen: '4/4/2023 2:35 PM', Role: 'orgOwner', Member_ID: 16, image: "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_1280.png" },
    { id: 5, email: 'Targaryen@gmil.com', Display_Name: 'Daenerys', Date_Joined: '4/4/2023 2:35 PM', Last_Seen: '4/4/2023 2:35 PM', Role: 'orgOwner', Member_ID: null, image: "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_1280.png" },
    { id: 6, email: 'Melisandre@gmil.com', Display_Name: null, Date_Joined: '4/4/2023 2:35 PM', Last_Seen: '4/4/2023 2:35 PM', Role: 'orgOwner', Member_ID: 150, image: "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_1280.png" },
    { id: 7, email: 'Clifford@gmil.com', Display_Name: 'Ferrara', Date_Joined: '4/4/2023 2:35 PM', Last_Seen: '4/4/2023 2:35 PM', Role: 'orgOwner', Member_ID: 44, image: "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_1280.png" },
    { id: 8, email: 'Frances@gmil.com', Display_Name: 'Rossini', Date_Joined: '4/4/2023 2:35 PM', Last_Seen: '4/4/2023 2:35 PM', Role: null, Member_ID: 36, image: "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_1280.png" },
    { id: 9, email: 'Roxie@gmil.com', Display_Name: 'Harvey', Date_Joined: '4/4/2023 2:35 PM', Last_Seen: '4/4/2023 2:35 PM', Role: 'orgOwner', Member_ID: 65, image: "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_1280.png" },
];

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'image', width: 80, renderCell: (params) => <img src={params.value} alt={params.value} /> },

    { field: 'Display_Name', headerName: 'Display Name', width: 130 },
    { field: 'Member_ID', headerName: 'Member ID', width: 130 },
    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 150,
    },
    {
        field: 'Role',
        headerName: 'Role',
        type: 'string',
        width: 160,
    },
    { field: 'Date_Joined', headerName: 'Date Joined', width: 130 },
    { field: 'Last_Seen', headerName: 'Last Seen', width: 130 },
];

export const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
