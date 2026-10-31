FROM pytorch/pytorch:2.7.1-cuda12.8-cudnn9-runtime

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    HF_HOME=/models

WORKDIR /app

# The base image ships torch 2.7.1+cu128 (sm_120 / RTX 50 Blackwell support).
# sentence-transformers accepts the installed torch, but pip could resolve a
# PyPI torch build (cu126, no Blackwell kernels) on a dependency conflict, so
# the sanity check below fails the image build if the CUDA 12.8 torch is lost.
COPY requirements.txt /app/requirements.txt
RUN python -m pip install --no-cache-dir -r /app/requirements.txt \
    && python -c "import torch; version = torch.__version__; print('torch', version); assert 'cu128' in version, f'GPU torch lost: {version}'"

COPY tools/vector_search.py /app/tools/vector_search.py

ENTRYPOINT ["python", "/app/tools/vector_search.py"]
