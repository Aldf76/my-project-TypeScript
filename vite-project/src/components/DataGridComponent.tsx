import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";
import api from "../services/api";
 
interface Post {
  id: number;
  title: string;
  body: string;
  viewNumbers: number;
}
 
const DataGridComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
 
  const fetchPosts = async () => {
    try {
      const response = await api.get<Post[]>("/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchPosts();
  }, []);
 
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 600 },
  ];
 
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }
 
  return (
    <Box m={4}>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
      />
    </Box>
  );
};
 
export default DataGridComponent;