import { userState } from '@/recoil/store';
import { supabase } from '@/lib/supabase/db';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const useUserWithRefresh = () => {
  const [user, setUser] = useRecoilState<any | null>(userState);

  const refreshUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);

    if (user) setUser(user);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return { user, refreshUser };
};

export default useUserWithRefresh;
