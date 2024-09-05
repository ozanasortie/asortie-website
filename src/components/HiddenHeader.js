"use client";

import { useDispatch } from "react-redux";
import { setHeaderVariant } from "@services/uiServices";
import { useEffect } from "react";

function HiddenHeader() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderVariant("second"));

    return () => dispatch(setHeaderVariant(null));
  }, []);

  return <></>;
}

export default HiddenHeader;
