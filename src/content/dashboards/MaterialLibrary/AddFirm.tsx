import { useForm } from 'react-hook-form';
import { updateFirmLists } from '../../../api/firm';
import { TextField, Grid, Button } from '@mui/material';

interface FormValues {
  firm: string;
}

const AddFirm = () => {
  const form = useForm({
    defaultValues: {
      firm: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const firmCreateSubmit = async (data: FormValues) => {
    const { firm } = data;

    const formData: FirmObject = {
      id: Date.now().toString(),
      name: firm,
    };

    try {
      await updateFirmLists(formData);
      form.reset();
    } catch (error) {
      throw new Error(String(error));
    }
  };

  return (
    <form noValidate className="flex" onSubmit={handleSubmit(firmCreateSubmit)}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <TextField
            label="Firm"
            sx={{ width: '100%' }}
            type="text"
            value={form.watch('firm')}
            {...register('firm', {
              required: 'Firm is required',
              validate: (value) =>
                value.trim() !== '' || 'Cannot be only whitespace',
            })}
            error={!!errors.firm}
            helperText={errors.firm?.message}
          />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained" style={{ width: '50%' }}>
            create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddFirm;
